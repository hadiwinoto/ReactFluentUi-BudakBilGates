import { Card } from "@fluentui/react-components";
import {
    Avatar,
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components";

const items = [
    {
        file: { label: "Meeting notes",},
        author: { label: "Max Mustermann", status: "available" },
        lastUpdated: { label: "7h ago", timestamp: 1 },
        lastUpdate: {
            label: "You edited this",
            icon: "",
        },
    },
    {
        file: { label: "Thursday presentation" },
        author: { label: "Erika Mustermann", status: "busy" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: "",
        },
    },
    {
        file: { label: "Training recording" },
        author: { label: "John Doe", status: "away" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: "",
        },
    },
    {
        file: { label: "Purchase order"},
        author: { label: "Jane Doe", status: "offline" },
        lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
        lastUpdate: {
            label: "You shared this in a Teams chat",
            icon: "",
        },
    },
];

const columns = [
    { columnKey: "file", label: "Date" },
    { columnKey: "author", label: "Author" },
    { columnKey: "lastUpdated", label: "Last updated" },
    { columnKey: "lastUpdate", label: "Status" },
];


const LeaveRequest = () => {
    return (
        <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
            <div style={{ flex: "3" }}>
                <Card style={{ marginBottom: '10px', borderRadius: "1px" }}>
                    <label>Leave Credit</label>
                    <h1>5 Days</h1>
                    <a className="text-link" style={{ color: "#0F6CBD",fontSize:"13px" }}>Detail</a>
                </Card>
                <Card style={{ borderRadius: "1px" }}>
                    <label>Status</label>
                </Card>
            </div>
            <div style={{ flex: "9" }}>
                <Card style={{ borderRadius: "1px" }}>
                    <label>List Request</label>
                    <Table
                        size="extra-small"
                        aria-label="Table with small size"
                        style={{
                            minWidth: "475px",
                            border: "1px solid #ccc",
                            borderCollapse: "collapse",
                        }}
                    >
                        <TableHeader>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableHeaderCell
                                        key={column.columnKey}
                                        style={{
                                            border: "1px solid #ccc",
                                            backgroundColor: "#f5f5f5",
                                        }}
                                    >
                                        {column.label}
                                    </TableHeaderCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow key={item.file.label}>
                                    <TableCell style={{ border: "1px solid #ccc" }}>
                                        <TableCellLayout media={item.file.icon}>
                                            {item.file.label}
                                        </TableCellLayout>
                                    </TableCell>
                                    <TableCell style={{ border: "1px solid #ccc" }}>
                                        <TableCellLayout
                                            media={
                                                <Avatar
                                                    aria-label={item.author.label}
                                                    name={item.author.label}
                                                    badge={{ status: item.author.status }}
                                                />
                                            }
                                        >
                                            {item.author.label}
                                        </TableCellLayout>
                                    </TableCell>
                                    <TableCell style={{ border: "1px solid #ccc" }}>
                                        {item.lastUpdated.label}
                                    </TableCell>
                                    <TableCell style={{ border: "1px solid #ccc" }}>
                                        <TableCellLayout media={item.lastUpdate.icon}>
                                            {item.lastUpdate.label}
                                        </TableCellLayout>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    );
};

export default LeaveRequest;
