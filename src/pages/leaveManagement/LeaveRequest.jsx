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

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbButton,
} from "@fluentui/react-components";

const columns = [
    { columnKey: "date", label: "Date" },
    { columnKey: "type", label: "Type" },
    { columnKey: "created_at", label: "Created at" },
    { columnKey: "status", label: "Status" },
];

const LeaveRequest = () => {
    const items = [

    ];
    return (
        <>
            <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <BreadcrumbButton current>
                        Leave Request
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <div style={{ display: "flex", flexDirection: "row", gap: "8px", padding: "8px" }}>
                <div style={{ flex: "3" }}>
                    <Card style={{ marginBottom: '10px', borderRadius: "1px" }}>
                        <label>Leave Credit</label>
                        <h1>5 Days</h1>
                        <a href="/leave-request-form" style={{ color: "#0F6CBD", fontSize: "13px", cursor: "pointer" }}>Create Request</a>
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
        </>

    );
};

export default LeaveRequest;
