using System.IO;
using DataAccess.Entities;
using Newtonsoft.Json;

namespace DataConverter
{
    public class ShantyBuilder
    {
        private readonly StreamWriter _streamWriter;
        private bool _gotTitle;
        private bool _gotAuthors;
        private bool _noAuthors;
        private bool _gettingAuthors;
        private bool _gotChorus;
        private bool _gettingChorus;
        private RawShanty _shanty;

        public ShantyBuilder(StreamWriter streamWriter)
        {
            _streamWriter = streamWriter;
            _shanty = new RawShanty();
        }
        
        public void ProcessLine(string line) 
        {
            if (IsNewShanty(line))
            {
                SaveShanty();
                return;
            }

            if (string.IsNullOrWhiteSpace(line))
            {
                HandleNullAndWhitespaces();
            }
            else if (!_gotTitle)
            {
                _shanty.Title = line.Trim();
                _gotTitle = true;
            }
            else
            {
                if (!_gotAuthors && !_noAuthors)
                {
                    if (!TrySetAuthors(line))
                    {
                        _noAuthors = true;
                    }
                }

                if (_gotAuthors || _noAuthors)
                {
                    SetTextAndChords(line);
                }
            }
        }

        private void SaveShanty()
        {
            Shanty shanty = new Shanty()
            {
                Title = _shanty.Title,
                Text = _shanty.Text.ToString(),
                Chorus = _shanty.Chorus.ToString(),
                HaveChords = _shanty.HaveChords,
                HaveChorusChords = _shanty.HaveChorusChords,
                Chords = _shanty.Chords.ToString(),
                ChorusChords = _shanty.ChorusChords.ToString(),
                Performer = _shanty.Performer,
                TextAuthor = _shanty.TextAuthor,
                MusicAuthor = _shanty.MusicAuthor
            };
            
            _streamWriter.WriteLine(JsonConvert.SerializeObject(shanty));
            Reset();
        }

        private void Reset()
        {
             _shanty = new RawShanty();
             _gotTitle = false;
             _gotAuthors = false;
             _noAuthors = false;
             _gettingAuthors = false;
             _gettingChorus = false;
             _gotChorus = false;
        }

        private void HandleNullAndWhitespaces()
        {
            if (_gettingAuthors)
            {
                _gettingAuthors = false;
                _gotAuthors = true;
            }
            else if (_gotTitle &&( _noAuthors||_gotAuthors))
            {
                _shanty.Text.Append("\n");
            }
        }
        
        private bool IsNewShanty(string line)
        {
            return line.Trim().StartsWith("===========================");
        }
        
        private bool TrySetAuthors(string line)
        {
            var splittedLine = line.Split(':');
            if (splittedLine.Length == 1)
            {
                return false;
            }

            SetAuthors(splittedLine[0].ToLower(), splittedLine[1].Trim());
            return true;
        }
        
        private void SetAuthors(string role, string author)
        {
            if (role.Contains("wykonawca"))
            {
                _shanty.Performer = author;
            }
            if (role.Contains("słowa"))
            {
                _shanty.TextAuthor = author;
            }
            if (role.Contains("muzyka"))
            {
                _shanty.MusicAuthor = author;
            }
        }

        private void SetTextAndChords(string line)
        {
            if (!_gotChorus)
            {
                if (IsItChorus(line))
                {
                    _gettingChorus = true;
                }
            }

            if (_gettingChorus)
            {
                if (TrySetChorusChord(line, out var text))
                {
                    _shanty.Chorus.Append($"{text}\n");
                }
                else if (!string.IsNullOrWhiteSpace(text))
                {
                    _shanty.Chorus.Append($"{line.Trim()}\n");
                }
                else
                {
                    _gettingChorus = false;
                    _gotChorus = true;
                }
            }
            else
            {
                if (TrySetTextChord(line, out var text))
                {
                    _shanty.Text.Append($"{text}\n");
                }
                else
                {
                    _shanty.Text.Append($"{line.Trim()}\n");
                }
            }
        }

        private bool IsItChorus(string line)
        {
            return line.ToLower().StartsWith("ref.:");
        }


        private bool TrySetTextChord(string line, out string text)
        {
            var splittedLine = line.Split('|');

            if (splittedLine.Length == 1)
            {
                text = null;
                return false;
            }

            text = splittedLine[0].Trim();
            var chord = splittedLine[splittedLine.Length - 1].Trim();

            if (IsRealChord(chord))
            {
                _shanty.Chords.Append($"{chord}\n");
                _shanty.HaveChords = true;
            }

            return true;
        }        
        
        private bool TrySetChorusChord(string line, out string text)
        {
            var splittedLine = line.Split('|');

            if (splittedLine.Length == 1)
            {
                text = null;
                return false;
            }

            text = splittedLine[0].Trim();
            var chord = splittedLine[splittedLine.Length - 1].Trim();

            if (IsRealChord(chord))
            {
                _shanty.ChorusChords.Append($"{chord}\n");
                _shanty.HaveChorusChords = true;
            }

            return true;
        }

        private bool IsRealChord(string chord)
        {
            if (chord.ToLower().Contains("bis") || chord.ToLower().Contains("refren"))
            {
                return false;
            }

            return true;
        }
    }
}