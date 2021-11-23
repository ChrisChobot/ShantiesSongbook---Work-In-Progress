using System.Text;

namespace DataConverter
{
    public class RawShanty
    {
        public string Title { get; set; }
        public StringBuilder Text { get; } = new StringBuilder();
        public bool HaveChords { get; set; }
        public StringBuilder Chords { get; } = new StringBuilder();
        public string Performer { get; set; }
        public string TextAuthor { get; set; }
        public string MusicAuthor { get; set; }
    }
}