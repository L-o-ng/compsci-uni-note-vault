class Countdown {
	daysLeft(deadline) {
		const raw = deadline?.toISODate ? deadline.toISODate() : deadline;
		const d = window.moment(raw, "YYYY-MM-DD", true);
		if (!d.isValid()) return "-";

		const days = d.diff(window.moment().startOf("day"), "days");
		if (days < 0) return "Overdue";
		if (days === 0) return "Today";
		if (days < 7) return `${days}d ⚠️`;
		if (days < 60) return `${days}d`;
		return `${Math.floor(days / 7)}w ${days % 7}d`;
	}
}
