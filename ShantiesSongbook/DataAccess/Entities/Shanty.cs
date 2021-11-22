namespace DataAccess.Entities
{
    public class Shanty
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool HaveChords { get; set; }
        public string Chords { get; set; }
    }
}
