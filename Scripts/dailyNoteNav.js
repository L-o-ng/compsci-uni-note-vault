class DailyNoteNav {

    // Parse "DD-MM-YYYY" → Date object
    parseDate(filename) {
    const name = filename.replace(/\.md$/, "");
    const [d, m, y] = name.split("-").map(Number);
    return new Date(y, m - 1, d);
    }

    // Get all daily note filenames sorted oldest→newest
    getSortedNotes(app) {
    const folder = app.vault.getAbstractFileByPath("Daily Notes");
    if (!folder || !folder.children) return [];

    return folder.children
      .filter(f => f.name && /^\d{2}-\d{2}-\d{4}\.md$/.test(f.name))
      .map(f => f.name.replace(/\.md$/, ""))
      .sort((a, b) => this.parseDate(a) - this.parseDate(b));
    }

    // Returns { prev, next } filenames (without .md) relative to a given title
    getNeighbours(app, currentTitle) {
        const notes = this.getSortedNotes(app);
        const idx = notes.indexOf(currentTitle);
        return {
          prev: idx > 0 ? notes[idx - 1] : null,
          next: idx >= 0 && idx < notes.length - 1 ? notes[idx + 1] : null,
        };
    }

    async patchPrevNoteNext(app, prevTitle, currentTitle) {
      if (!prevTitle) return;
      const path = `Daily Notes/${prevTitle}.md`;
      const file = app.vault.getAbstractFileByPath(path);
      if (!file) return;

      let content = await app.vault.read(file);

      // Only replace the Next portion at the end of the nav line
      const patched = content.replace(
        /(<< .* \| .* \| ).*?(>>)/m,
        `$1[[${currentTitle}|Next]]$2`
      );

      if (patched !== content) {
        await app.vault.modify(file, patched);
      }
    }
}
