namespace DataAccess.Entities
{
    public class Shanty
    {
        public int Id { get; set; }
        public string Chords { get; set; }
        public string ChorusChords { get; set; }
        public string MusicAuthor { get; set; }
        public string Text { get; set; }
        public string Chorus { get; set; }
        public string TextAuthor { get; set; }
        public string Title { get; set; }
        public string Performer { get; set; }
        public bool HaveChords { get; set; }
        public bool HaveChorusChords { get; set; }

    }
}
