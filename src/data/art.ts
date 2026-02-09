export interface ArtPiece {
  slug: string;
  title: string;
  medium: string;
  dimensions: string;
  year: string;
  description: string;
  images: string[];
  coverImage: string;
  exhibition?: string;
}

export const artPieces: ArtPiece[] = [
  {
    slug: "fragments",
    title: "Fragments: September 28\u2013November 9",
    medium: "Monotype on paper",
    dimensions: "iPhone 14\u2013sized prints arranged in a grid",
    year: "2025",
    description:
      "This piece is a culmination of my undergraduate degree in fine art and STS theory in partial completion of my thesis project. Titled, Fragments: September 28-November 9, the piece was displayed in the Scripps Senior Thesis Showcase, Tracework, showcased 11/18/25\u201412/15/25.\n\nIn a world where our attention is constantly pulled between our screens and our surroundings, this piece asks: how does the constant distraction coming from digital notifications shape the way we sustain connection to ourselves, to others, and to the physical world? I used my daily life to investigate this question. For several weeks, I recorded short sentiments reflecting the ways I experienced connection each day, then transformed them into abstract prints. Each phone-sized piece captures a fragment of my day-to-day experience, while the full grid speaks to the lived patterns of attention and interruption brought on by the digital technologies we rely on.",
    images: Array.from({ length: 11 }, (_, i) => `/images/art/fragments/${i + 1}.jpg`),
    coverImage: "/images/art/fragments/1.jpg",
    exhibition: "Scripps Senior Thesis Showcase, Tracework, 2025",
  },
  {
    slug: "monotype-series-spring",
    title: "Monotype Series: Spring",
    medium: "Monotype on paper",
    dimensions: "14 in \u00d7 24 in",
    year: "2024",
    description:
      "This series explores the emotional and visual experience of emerging from winter into a new season. Through abstract imagery and the unique qualities of monotype printing, I investigated how color, gesture, and form can evoke the feeling of renewal and vitality. Working with the monotype process, where each print is unique and somewhat unpredictable, became a metaphor for the organic, unfolding nature of spring itself. This was my first significant experimentation with both the medium and abstract imagery, marking an important shift in my practice toward more gestural, intuitive mark-making.",
    images: Array.from({ length: 10 }, (_, i) => `/images/art/monotype-series-spring/${i + 1}.jpg`),
    coverImage: "/images/art/monotype-series-spring/1.jpg",
  },
  {
    slug: "spring-no1",
    title: "Spring No.1",
    medium: "Pastel and watercolor on paper",
    dimensions: "48 in \u00d7 60 in",
    year: "2025",
    description:
      "This large-scale work represents an ambitious exploration of springtime imagery, both conceptually and in terms of physical scale. Using pastel and watercolor, I embraced loose, experimental approaches to color and abstraction, allowing the materials to guide the composition as much as intention. The painting celebrates life, vitality, and reinvigoration through dynamic color relationships and gestural mark-making. By working at this expanded scale for the first time, I was able to immerse myself and the viewer fully in the landscape of renewal and growth.",
    images: ["/images/art/spring-no1/1.jpg"],
    coverImage: "/images/art/spring-no1/1.jpg",
  },
  {
    slug: "pebble-cyanotypes",
    title: "Pebble Cyanotypes No. 1 \u2014 No. 5",
    medium: "Cyanotype on paper",
    dimensions: "35 in x 50 in",
    year: "2024",
    description:
      "Using the historic cyanotype process, this series explores the relationship between light, time, and photographic imagery. The distinctive blue tones of cyanotype create an ethereal quality that feels timeless, yet contemporary. Each print in the series repeats an image of the same found objects, examining how the photographic process transforms ordinary subject matter into something contemplative and visually striking. This work continues my interest in materials-based experimentation while engaging with the rich history of photographic processes.",
    images: Array.from({ length: 5 }, (_, i) => `/images/art/pebble-cyanotypes/${i + 1}.jpg`),
    coverImage: "/images/art/pebble-cyanotypes/1.jpg",
  },
  {
    slug: "ancient-blooms",
    title: "Ancient Blooms",
    medium: "Screen print on paper",
    dimensions: "14 in x 24 in",
    year: "2025",
    description:
      "This screen print layers the imagery of pebbles with delicate floral elements, creating a visual conversation between geological permanence and botanical ephemerality. The juxtaposition suggests the vast timescales of stone formation against the brief blooming of flowers, while also exploring how life takes root even in the most seemingly inhospitable places. Through the screen printing process, I was able to achieve crisp, graphic renderings of organic forms while playing with pops of abstracted, flat color blocks. The work continues my ongoing investigation of natural forms while expanding my visual vocabulary to include more complex compositional relationships.",
    images: Array.from({ length: 2 }, (_, i) => `/images/art/ancient-blooms/${i + 1}.jpg`),
    coverImage: "/images/art/ancient-blooms/1.jpg",
  },
  {
    slug: "through-my-window",
    title: "Through My Window",
    medium: "Screen print on paper",
    dimensions: "14 in \u00d7 24 in",
    year: "2025",
    description:
      "Created during a screen printing class, this work depicts a self-portrait emerging into a garden of strange, whimsical blooms. The composition captures both a literal moment, looking out my window into the garden beyond, and a more internal landscape of feeling. The exaggerated, almost surreal quality of the blooms reflects my emotional state: immersed in wonder, surrounded by beauty, yet slightly disoriented by its strangeness. This print exemplifies my ongoing interest in landscape as a metaphorical space for exploring personal experience and the interplay between the natural world and inner life.",
    images: Array.from({ length: 2 }, (_, i) => `/images/art/through-my-window/${i + 1}.jpg`),
    coverImage: "/images/art/through-my-window/1.jpg",
  },
  {
    slug: "pebbles-linocut",
    title: "Pebbles (Linocut)",
    medium: "Reduction linocut print on paper",
    dimensions: "8 in x 10 in",
    year: "2025",
    description:
      "Using the reduction linocut technique, where the same block is progressively carved and printed in layers, I created this print to revisit pebble imagery yet again in my work, this time with an emphasis on texture, form, and the buildup of color. The reduction method requires commitment and careful planning, as each carved layer eliminates material that can never be recovered. Through this technically demanding process, I continued my exploration of pebbles and rocks as subjects, finding new ways to render their weight, surface quality, and quiet presence.",
    images: Array.from({ length: 4 }, (_, i) => `/images/art/pebbles-linocut/${i + 1}.jpg`),
    coverImage: "/images/art/pebbles-linocut/1.jpg",
  },
  {
    slug: "pebble-series",
    title: "Pebble Series",
    medium: "Watercolor on paper",
    dimensions: "8 in \u00d7 12 in, Series of 4",
    year: "2024",
    description:
      "This intimate series of small-scale watercolor paintings draws inspiration from natural forms and the quiet poetry of overlooked objects. Each painting in the series examines pebbles and stones with close attention, revealing the subtle variations in texture, shape, and color that typically go unnoticed. Working at this reduced scale required precision and restraint, contrasting with the expansive gesture of my larger works. The Pebble Series demonstrates my interest in finding profound beauty in simple, elemental forms from the natural world.",
    images: Array.from({ length: 4 }, (_, i) => `/images/art/pebble-series/${i + 1}.jpg`),
    coverImage: "/images/art/pebble-series/1.jpg",
    exhibition: "2D 1Day show, Glasgow School of Art, Glasgow, Scotland, December 1, 2024",
  },
  {
    slug: "evolution",
    title: "Evolution",
    medium: "Ceramic sculptures",
    dimensions: "11 in x 60 in x 7 in",
    year: "2024",
    description:
      "This series of ceramic fish sculptures explores themes of transformation, adaptation, and the passage of time through the natural world. Working in clay allowed me to engage with three-dimensional form in a direct, tactile way, building each fish by hand and considering how their shapes might suggest movement through water or evolution across millennia. The fish became vehicles for thinking about change and survival, while also allowing me to experiment with sculptural techniques, surface treatments, and the unpredictable nature of the firing process. This work marks an important expansion of my practice beyond two-dimensional mediums into sculpture and ceramics.",
    images: Array.from({ length: 2 }, (_, i) => `/images/art/evolution/${i + 1}.jpg`),
    coverImage: "/images/art/evolution/1.jpg",
    exhibition: "Scripps Lang exhibit ceramics student showcase, Scripps College, March 19, 2024",
  },
  {
    slug: "familiar-worlds",
    title: "Familiar Worlds Series",
    medium: "Watercolor on paper",
    dimensions: "8 in x 12 in",
    year: "2024",
    description:
      "This whimsical series imagines aquatic creatures navigating human environments and domestic spaces. By placing these creatures out of their natural element, I created surreal, dreamlike scenarios that invite viewers to reconsider the ordinary through a lens of wonder and absurdity. The watercolor medium\u2019s fluid, transparent qualities echo the aquatic nature of the subjects while allowing for soft, atmospheric compositions. These paintings blend my fascination with marine life, my interest in creating imaginative landscapes, and my desire to find magic in the mundane intersections between human and natural worlds.",
    images: Array.from({ length: 3 }, (_, i) => `/images/art/familiar-worlds/${i + 1}.jpg`),
    coverImage: "/images/art/familiar-worlds/1.jpg",
  },
  {
    slug: "scottish-highlands",
    title: "Playing in the Scottish Highlands",
    medium: "Zinc lithography on paper",
    dimensions: "25 in x 35 in",
    year: "2024",
    description:
      "Created using the traditional zinc lithography process, this print captures the joy and freedom of exploring the dramatic landscape of the Scottish Highlands during my time studying abroad in Glasgow, Scotland. Lithography\u2014with its grease-based drawing and chemical processes\u2014allowed me to achieve rich, gestural marks and atmospheric tonal ranges that evoke the misty, expansive quality of the Highland terrain. The work is both a documentary response to visiting new places and an emotional record of the experience of being immersed in such a powerful landscape. This piece represents a synthesis of my interests in landscape, mark-making, and the relationship between place and feeling.",
    images: Array.from({ length: 2 }, (_, i) => `/images/art/scottish-highlands/${i + 1}.jpg`),
    coverImage: "/images/art/scottish-highlands/1.jpg",
  },
  {
    slug: "assorted-sketches",
    title: "Assorted Sketches",
    medium: "Various mediums and sizes",
    dimensions: "Various",
    year: "2022\u20132025",
    description:
      "This collection of sketches documents my exploratory process across multiple subjects and drawing approaches, including life drawings from live models, still life studies, and observational work. Rather than polished finished pieces, these sketches reveal the thinking and experimentation that underlies my larger works. Together, they demonstrate my commitment to continuous observation and skill-building, while also serving as a visual record of ideas, compositions, and techniques I continue to develop and refine across my practice.",
    images: Array.from({ length: 6 }, (_, i) => `/images/art/assorted-sketches/${i + 1}.jpg`),
    coverImage: "/images/art/assorted-sketches/1.jpg",
  },
];
