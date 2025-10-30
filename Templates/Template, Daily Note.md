#daily-note

<< [[<% tp.date.now("DD-MM-YYYY", -1) %>|Previous]] | <% moment(tp.file.title,'DD-MM-YYYY').format("dddd, MMMM DD, YYYY") %> | [[<% tp.date.now("DD-MM-YYYY", 1) %>|Next]] >>

---
## 📒 Notes
+ <% tp.file.cursor() %>

---
### Notes created today
```dataview
List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc
```
### Notes last touched today
```dataview
List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc
```