const blogPosts = [
  {
    image: "./blank.jpg",
    date: "Feb 14, 2025",
    title: "New Discoveries in AI",
    link: "https://www.uh.edu/",
    description:
      "Discover how our engineering team is pioneering new approaches to renewable energy solutions through innovative research and cross-disciplinary collaboration.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Sarah Johnson",
    sponsorName: "Energy Futures Initiative",
    category: "Artificial Intelligence",
  },
  {
    image: "./blank.jpg",
    date: "Feb 13, 2025",
    title: "Campus Initiatives for Student Wellness",
    link: "https://www.uh.edu/",
    description:
      "Explore the university's latest programs supporting student mental health and well-being through comprehensive campus resources.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Michael Chen",
    sponsorName: "Health & Wellness Center",
    category: "Education & Student Life",
  },
  {
    image: "./blank.jpg",
    date: "Feb 12, 2025",
    title: "Advancements in Renewable Energy Technology",
    link: "https://www.uh.edu/",
    description:
      "Learn about the latest breakthroughs in solar and wind energy technology, and how they are shaping the future of sustainable energy.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Emily Carter",
    sponsorName: "Green Energy Alliance",
    category: "Renewable Energy",
  },
  {
    image: "./blank.jpg",
    date: "Feb 11, 2025",
    title: "AI Learning: The Future of Education",
    link: "https://www.uh.edu/",
    description:
      "Discover how artificial intelligence is revolutionizing the learning experience, making education more personalized and accessible.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Robert Williams",
    sponsorName: "Future EdTech",
    category: "Artificial Intelligence",
  },
  {
    image: "./blank.jpg",
    date: "Feb 10, 2025",
    title: "Cybersecurity Trends to Watch in 2025",
    link: "https://www.uh.edu/",
    description:
      "Stay ahead of emerging cybersecurity threats and learn how experts are developing advanced strategies to protect digital assets.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Olivia Martinez",
    sponsorName: "CyberSafe Solutions",
    category: "Cybersecurity & Tech",
  },
  {
    image: "./blank.jpg",
    date: "Feb 9, 2025",
    title: "Breakthroughs in Space Exploration",
    link: "https://www.uh.edu/",
    description:
      "Explore the latest missions and discoveries in space exploration, including advancements in interplanetary travel and satellite technology.",
    authorImage: "./blank.jpg",
    authorName: "Dr. James Anderson",
    sponsorName: "AstroTech Innovations",
    category: "Space & Exploration",
  },
  {
    image: "./blank.jpg",
    date: "Feb 8, 2025",
    title: "The Role of AI in Healthcare Innovations",
    link: "https://www.uh.edu/",
    description:
      "Learn how AI-driven technologies are transforming healthcare by improving diagnostics, patient care, and medical research.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Sophia Lee",
    sponsorName: "MedTech Advances",
    category: "Artificial Intelligence",
  },
  {
    image: "./blank.jpg",
    date: "Feb 7, 2025",
    title: "Sustainable Architecture: Designing the Future",
    link: "https://www.uh.edu/",
    description:
      "Discover how architects and engineers are incorporating sustainability into modern building designs to create a greener future.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Nathan Collins",
    sponsorName: "Sustainable Living Institute",
    category: "Sustainability & Architecture",
  },
  {
    image: "./blank.jpg",
    date: "Feb 6, 2025",
    title: "The Impact of Quantum Computing on Industries",
    link: "https://www.uh.edu/",
    description:
      "Learn how quantum computing is set to revolutionize various industries, from finance to pharmaceuticals and beyond.",
    authorImage: "./blank.jpg",
    authorName: "Dr. Evelyn Harris",
    sponsorName: "QuantumTech Innovations",
    category: "Quantum Computing & Industry",
  },
];

// BLOG RENDERING //
const createBlogPost = (post) => {
  return `
    <div class="col-12 col-md-4 mb-4">
      <div class="card h-100">
      <a href="${post.link}" class="text-decoration-none">
        <img src="${post.image}" alt="Blog post image" class="blog-img card-img-top" />
        </a>
        <div class="card-body mx-0 px-0">
          <div class="post-date text-muted small mb-2">${post.date}</div>
          <h2 class="post-title card-title">
            <a href="${post.link}" class="text-decoration-none">${post.title}</a>
          </h2>
          <p class="post-description card-text">${post.description}</p>
          <div class="d-flex align-items-center">
            <img src="${post.authorImage}" alt="Author" class="author-img rounded-circle" />
            <div class="ml-3 px-3">
              <div class="author-name">${post.authorName}</div>
              <div class="sponsor-name">${post.sponsorName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Variables for filtering
let selectedCategory = null;
let selectedSponsor = null;
let visiblePosts = 6;

// DOMContentLoaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
  const blogPostsContainer = document.getElementById("blog-posts-container");
  const loadMoreButton = document.getElementById("load-more-btn");
  const dateDropdown = document.getElementById("date-dropdown");
  const searchBar = document.getElementById("search-bar");

  // Parse date strings into Date objects
  const parseDate = (dateString) => new Date(dateString);

  // Render blog posts
  const renderBlogPosts = (posts = blogPosts) => {
    blogPostsContainer.innerHTML = posts
      .slice(0, visiblePosts)
      .map(createBlogPost)
      .join("");

    if (visiblePosts >= posts.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block";
    }
  };

  // Load more posts
  loadMoreButton.addEventListener("click", () => {
    visiblePosts += 3;
    renderBlogPosts();
  });

  // Sorting Logic
  dateDropdown.addEventListener("click", (event) => {
    if (event.target.dataset.sort === "latest") {
      blogPosts.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    } else if (event.target.dataset.sort === "oldest") {
      blogPosts.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    }

    renderBlogPosts();
  });

  // Populate Category Dropdown
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const categoryDropdown = document.getElementById("category-dropdown");
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.textContent = category;
    div.dataset.category = category;
    categoryDropdown.appendChild(div);
  });

  // Populate Sponsor Dropdown
  const sponsors = [...new Set(blogPosts.map((post) => post.sponsorName))];
  const sponsorDropdown = document.getElementById("sponsor-dropdown");
  sponsors.forEach((sponsor) => {
    const div = document.createElement("div");
    div.textContent = sponsor;
    div.dataset.sponsor = sponsor;
    sponsorDropdown.appendChild(div);
  });

  // Add click handlers for filter items
  document.querySelectorAll("#category-dropdown div").forEach((item) => {
    item.addEventListener("click", () => {
      selectedCategory =
        selectedCategory === item.dataset.category
          ? null
          : item.dataset.category;
      document.querySelectorAll("#category-dropdown div").forEach((div) => {
        div.classList.toggle(
          "active",
          div.dataset.category === selectedCategory
        );
      });
      applyFilters();
    });
  });

  document.querySelectorAll("#sponsor-dropdown div").forEach((item) => {
    item.addEventListener("click", () => {
      selectedSponsor =
        selectedSponsor === item.dataset.sponsor ? null : item.dataset.sponsor;
      document.querySelectorAll("#sponsor-dropdown div").forEach((div) => {
        div.classList.toggle("active", div.dataset.sponsor === selectedSponsor);
      });
      applyFilters();
    });
  });

  // Search input handler
  searchBar.addEventListener("input", () => {
    applyFilters();
  });

  // Initial render
  renderBlogPosts();
});

// Apply filters (search + category + sponsor)
const applyFilters = () => {
  const searchQuery = document.getElementById("search-bar").value.toLowerCase();
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery);
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    const matchesSponsor =
      !selectedSponsor || post.sponsorName === selectedSponsor;
    return matchesSearch && matchesCategory && matchesSponsor;
  });

  renderBlogs(filteredPosts);

  const isFilterActive = searchQuery || selectedCategory || selectedSponsor;
  document.getElementById("load-more-btn").style.display = isFilterActive
    ? "none"
    : "block";
};

// Render filtered blogs
const renderBlogs = (posts) => {
  const blogContainer = document.getElementById("blog-posts-container");
  if (!blogContainer) return;

  blogContainer.innerHTML = posts.length
    ? posts.map(createBlogPost).join("")
    : "<p>No blog posts found.</p>";
};

// Dropdown Logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    const dropdown = button.closest(".dropdown");
    const content = dropdown.querySelector(".dropdown-content");

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const isActive = button.classList.contains("active");

      // Close all dropdowns before opening a new one
      document.querySelectorAll(".dropdown-btn").forEach((btn) => {
        btn.classList.remove("active");
        btn
          .closest(".dropdown")
          .querySelector(".dropdown-content").style.display = "none";
      });

      // Toggle the current dropdown
      if (!isActive) {
        button.classList.add("active");
        content.style.display = "block";
      }
    });
  });

  // Click outside closes only the active dropdown
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".dropdown-btn.active")
      .forEach((activeButton) => {
        const dropdown = activeButton.closest(".dropdown");
        dropdown.querySelector(".dropdown-content").style.display = "none";
        activeButton.classList.remove("active");
      });
  });
});
