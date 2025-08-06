import React, { useEffect, useState } from 'react';
import { Field, Button, Select, Textarea ,makeStyles } from "@fluentui/react-components";
import { } from "@fluentui/react-components";
import client from '../../service/autClient';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
} from "@fluentui/react-components";

import { DatePicker } from "@fluentui/react-datepicker-compat";

const useStyles = makeStyles({
  control: {
    maxWidth: "100%",
  },
});

const customSelectStyles = {
  root: {
    borderRadius: '1px',
  }
};

const FormRequest = () => {
    const styles = useStyles();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalLeave, setTotalLeave] = useState(12);
    const [remainingLeave, setRemainingLeave] = useState(10);
    const [optionstype, setOptionstype] = useState([]);
    const [optionsEmployee, setOptionsEmployee] = useState([]);


    const calculateLeaveDays = (start, end) => {
        if (!start || !end) return 0;
        const startD = new Date(start);
        const endD = new Date(end);
        const diffTime = endD.getTime() - startD.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
        return diffDays > 0 ? diffDays : 0;
    };

    const leaveDays = calculateLeaveDays(startDate, endDate);
    const updatedRemainingLeave = remainingLeave - leaveDays;

    // Handler checkbox departemen
    const toggleDepartment = (dept) => {
        if (selectedDepartments.includes(dept)) {
            setSelectedDepartments(selectedDepartments.filter((d) => d !== dept));
        } else {
            setSelectedDepartments([...selectedDepartments, dept]);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Cuti diajukan oleh ${name} selama ${leaveDays} hari.`);
    };

    const getDataOptions = async () => {
        try {
            const response = await client.get('data-options');
            setOptionstype(response.data.options_leave);
            setOptionsEmployee(response.data.employee)
        } catch (error) {
            console.error('Error fetching leave types:', error);
        }
    };

    useEffect(() => {
        getDataOptions();
    }, []);

    return (
        <>
            <Breadcrumb aria-label="Breadcrumb default example">
                <BreadcrumbItem>
                    <BreadcrumbButton href={"/leave-request"}>
                        Leave Request
                    </BreadcrumbButton>
                </BreadcrumbItem>
                <BreadcrumbDivider />
                <BreadcrumbItem>
                    <BreadcrumbButton current>
                        Form Leave Request
                    </BreadcrumbButton>
                </BreadcrumbItem>
            </Breadcrumb>
            <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif', padding: 20 }}>
                <div className="card mt-3" style={{ padding: 20, boxShadow: '0 2px 4px rgba(248, 243, 243, 0.1)', borderRadius: 1, backgroundColor: "#FFFFFF" }}>
                    <form onSubmit={onSubmit}>
                        {/* <div style={{ marginBottom: 5 }}>
                            <Field
                                label="Full Name *"
                            >
                                <Input readOnly style={{ borderRadius: "1px" }} />
                            </Field>
                        </div> */}

                        <div style={{ marginBottom: 5 }}>
                            <Field
                                label="Time Of type"
                            >
                                <Select style={customSelectStyles}>
                                    <option></option>
                                    {optionstype.map((option, idx) => (
                                        <option key={idx} value={option.pk_projectmaster_id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </Select>
                            </Field>
                        </div>

                        <div style={{ marginBottom: 5 }}>
                            <Field
                                label="Request Type"
                            >
                                <Select style={customSelectStyles}>
                                    <option></option>
                                    <option>Full Day</option>
                                    <option>Half Day</option>
                                </Select>
                            </Field>
                        </div>
                        <div style={{ marginBottom: 5 }}>
                            <Field
                                label="Delegate"
                            >
                                <Select style={customSelectStyles}>
                                    <option></option>
                                    {optionsEmployee.map((option, idxe) => (
                                        <option key={idxe} value={option.pk_employee_id}>
                                            {option.full_name}
                                        </option>
                                    ))}
                                </Select>
                            </Field>
                        </div>

                        <div style={{ marginBottom: 10 }}>
                            <Field label="Description">
                                <Textarea  style={{borderRadius: "1px"}}/>
                            </Field>
                        </div>

                        <div style={{ display: 'flex', gap: 20, marginBottom: 25, alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <Field label="Start Date">
                                <DatePicker
                                    className={styles.control}
                                    placeholder="Select a date..."
                                    style={{ borderRadius: '1px', width: '100%' }}
                                />
                                </Field>
                            </div>
                            <div style={{ flex: 1 }}>
                                <Field label="End Date">
                                <DatePicker
                                    className={styles.control}
                                    placeholder="Select a date..."
                                    style={{ borderRadius: '1px', maxwidth: '100%' }}
                                />
                                </Field>
                            </div>
                            </div>






                        {/* <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
                            Jumlah Hari Cuti yang Diajukan: {leaveDays} hari
                        </div>

                        <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
                            Total Hak Cuti: {totalLeave} hari
                        </div>

                        <div style={{ marginBottom: 25, fontWeight: 'bold' }}>
                            Total Sisa Hak Cuti Setelah Diambil: {updatedRemainingLeave >= 0 ? updatedRemainingLeave : 'Tidak valid'}
                        </div> */}

                        <Button type="submit" appearance="primary">
                            Submit
                        </Button>
                    </form>
                </div>

            </div>
        </>

    );
};

export default FormRequest;
