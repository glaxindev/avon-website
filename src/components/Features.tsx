import {
  Repeat,
  Music,
  List,
  Globe,
  Sparkles,
  AudioLines,
  ListMusic,
  Infinity as inf,
  RotateCw,
} from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Quality",
    description: "Experience crystal-clear sound for every interaction.",
  },
  {
    icon: Repeat,
    title: "Autoplay",
    description: "Enjoy uninterrupted music with seamless automation.",
  },
  {
    icon: List,
    title: "Playlist",
    description: "Create, manage, and enjoy custom playlists effortlessly.",
  },
  {
    icon: Globe,
    title: "Platforms",
    description: "Stream seamlessly from SoundCloud, YouTube, and Spotify.",
  },
  {
    icon: Sparkles,
    title: "Filters",
    description: "Enhance your audio with powerful sound filters.",
  },
  {
    icon: AudioLines,
    title: "Queue",
    description: "Manage and view your song lineup with ease.",
  },
  {
    icon: ListMusic,
    title: "Lyrics",
    description:
      "Display song lyrics in real-time for an immersive experience.",
  },
  {
    icon: RotateCw,
    title: "Loop",
    description: "Repeat your favorite tracks endlessly with the loop feature.",
  },
  {
    icon: inf,
    title: "24/7",
    description: "Keep the music playing non-stop, all day, every day.",
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-black/20 border border-transparent hover:border-[#8B5DFF] transition-all duration-300 hover:scale-105 group"
              >
                <feature.icon className="w-10 h-10 text-[#8B5DFF] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
