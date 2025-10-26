/* assets/js/news-renderer.js */
(function () {
  // Config
  const INITIAL_VISIBLE = 6; // how many items are visible initially
  const containerId = 'newsList';
  const toggleBtnId = 'toggleBtn';
  const toggleTextId = 'toggleText';
  const toggleIconId = 'toggleIcon';

  // Utilities
  function parseDate(d) {
    // Accept ISO-like date strings (YYYY-MM-DD). Fallback if needed.
    return new Date(d);
  }

  function escapeHtml(text) {
    // Minimal escaping to prevent HTML injection if titles come from untrusted sources
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // Sort newsItems by date desc
  const sorted = (Array.isArray(newsItems) ? newsItems.slice() : []).sort((a, b) => {
    const da = parseDate(a.date);
    const db = parseDate(b.date);
    return db - da;
  });

  const container = document.getElementById(containerId);
  const toggleBtn = document.getElementById(toggleBtnId);
  const toggleText = document.getElementById(toggleTextId);
  const toggleIcon = document.getElementById(toggleIconId);

  if (!container) {
    console.warn('News renderer: container not found:', containerId);
    return;
  }

  // Build list item HTML
  function buildItem(item) {
    const li = document.createElement('li');
    li.style.borderBottom = '1px solid #ddd';
    li.style.padding = '10px 0';

    // Date (formatted)
    const dateSpan = document.createElement('span');
    dateSpan.style.fontWeight = 'bold';
    // Format date as "Month D, YYYY" for readability
    const d = parseDate(item.date);
    const dateText = isNaN(d) ? item.date : d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    dateSpan.textContent = dateText + ': ';

    const titleSpan = document.createElement('span');
    titleSpan.innerHTML = escapeHtml(item.title);

    li.appendChild(dateSpan);
    li.appendChild(titleSpan);

    if (item.link) {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = item.external ? '_blank' : '_self';
      a.rel = item.external ? 'noopener noreferrer' : '';
      a.style.color = '#007bff';
      a.style.textDecoration = 'none';
      a.style.marginLeft = '8px';
      a.textContent = 'Read more';
      li.appendChild(a);
    }

    return li;
  }

  // Render function
  function render() {
    container.innerHTML = '';
    // Mark items that are 'extra' (optional property) or beyond INITIAL_VISIBLE as hidden initially
    sorted.forEach((item, idx) => {
      const li = buildItem(item);
      const isExtraFlagged = !!item.extra;
      const isBeyondInitial = idx >= INITIAL_VISIBLE;
      if (isExtraFlagged || isBeyondInitial) {
        li.classList.add('news-extra');
        li.style.display = 'none';
      } else {
        li.style.display = 'block';
      }
      container.appendChild(li);
    });

    // If there are no hidden items, hide the toggle control
    const hiddenCount = container.querySelectorAll('.news-extra').length;
    const toggleWrapper = document.getElementById('toggleButton');
    if (!hiddenCount) {
      if (toggleWrapper) toggleWrapper.style.display = 'none';
    } else {
      if (toggleWrapper) toggleWrapper.style.display = 'block';
      // set initial accessible state
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleText.textContent = 'Show More';
      toggleIcon.className = 'fas fa-chevron-down';
    }
  }

  // Toggle handler
  function toggle() {
    const extras = container.querySelectorAll('.news-extra');
    const isHidden = extras.length && extras[0].style.display === 'none';
    extras.forEach(item => {
      item.style.display = isHidden ? 'block' : 'none';
    });
    toggleBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    toggleText.textContent = isHidden ? 'Show Less' : 'Show More';
    toggleIcon.className = isHidden ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }

  // Attach event
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggle();
    });
  }

  // Initial render
  render();

  // Expose a debug helper for console: window.newsAdd({..})
  window.newsAdd = function (obj) {
    sorted.push(obj);
    sorted.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    render();
  };

})();
