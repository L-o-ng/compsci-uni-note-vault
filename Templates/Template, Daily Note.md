#daily-note

<%*
const nav = customJS.DailyNoteNav;
const currentTitle = tp.file.title;

const { prev, next } = nav.getNeighbours(app, currentTitle);
await nav.patchPrevNoteNext(app, prev, currentTitle);

const prevLink = prev ? "[[" + prev + "|Previous]]" : "Previous";
const nextLink = next ? "[[" + next + "|Next]]" : "Next";

const displayDate = moment(currentTitle, 'DD-MM-YYYY').format("dddd, MMMM DD, YYYY");

tR += "<< " + prevLink + " | " + displayDate + " | " + nextLink + " >>";
%>

---
## 📝 Notes
- <% tp.file.cursor() %>

---
### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```
### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```