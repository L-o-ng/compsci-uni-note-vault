<%*
const today = moment().format("DD-MM-YYYY");
const folder = "Daily Notes"; // your daily notes folder
const path = `${folder}/${today}.md`;

const exists = await app.vault.adapter.exists(path);
if (!exists) {
    await tp.file.create_new(tp.file.find_tfile("Template, Daily Note"), today, true, app.vault.getAbstractFileByPath(folder));
}
%>