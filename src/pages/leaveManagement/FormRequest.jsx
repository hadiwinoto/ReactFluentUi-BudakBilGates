import React, { useState } from 'react';
import { Field, Input } from "@fluentui/react-components";

const departments = [
  'Engineering',
  'Fabrikasi',
  'HRD & GA',
  'Finance',
  'Quality',
  'HSE',
  'PMT',
  'Procurement',
  'Warehouse',
  'Yard',
  'Yard Facility',
];

const FormRequest = () => {
  const [name, setName] = useState('MULYO HADI WINOTO');
  const [employeeNumber, setEmployeeNumber] = useState('25057');
  const [jobTitle, setJobTitle] = useState('IT STAFF');
  const [selectedDepartments, setSelectedDepartments] = useState(['Engineering', 'Procurement']);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalLeave, setTotalLeave] = useState(12); // Contoh total hak cuti
  const [remainingLeave, setRemainingLeave] = useState(10); // Contoh sisa cuti awal

  // Hitung jumlah hari cuti berdasarkan startDate dan endDate
  const calculateLeaveDays = (start, end) => {
    if (!start || !end) return 0;
    const startD = new Date(start);
    const endD = new Date(end);
    // Hitung beda hari + 1 supaya menghitung tanggal mulai dan selesai
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
    // Implement submit logika sesuai kebutuhan, misal ke API backend
    alert(`Cuti diajukan oleh ${name} selama ${leaveDays} hari.`);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif', padding: 20 }}>

      
    <div className="card mt-3" style={{ padding: 20, boxShadow: '0 2px 4px rgba(248, 243, 243, 0.1)', borderRadius: 1, backgroundColor: "#FFFFFF" }}>
        <form onSubmit={onSubmit}>
            {/* <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>FORMULIR PENGAJUAN CUTI TAHUNAN</h2> */}
            <div style={{ marginBottom: 15 }}>
            <Field
                label="Full Name"
                // validationState="success"
                // validationMessage="This is a success message."
                
            >
                <Input />
            </Field>
            </div>

            <div style={{ marginBottom: 15 }}>
            <Field
                label="NIK"
                // validationState="success"
                // validationMessage="This is a success message."
                
            >
                <Input />
            </Field>
            </div>

            <div style={{ marginBottom: 15 }}>
                <Field
                    label="Position"
                    // validationState="success"
                    // validationMessage="This is a success message."
                >
                    <Input />
                </Field>
            </div>

            <div style={{ marginBottom: 15 }}>
            <label>Departemen: </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {departments.map((dept) => (
                <label key={dept} style={{ minWidth: 120 }}>
                    <input
                    type="checkbox"
                    checked={selectedDepartments.includes(dept)}
                    onChange={() => toggleDepartment(dept)}
                    />{' '}
                    {dept}
                </label>
                ))}
            </div>
            </div>

            <div style={{ marginBottom: 15 }}>
            <label>Tanggal Mulai Cuti: </label>
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            </div>

            <div style={{ marginBottom: 15 }}>
            <label>Tanggal Selesai Cuti: </label>
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            </div>

            <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
            Jumlah Hari Cuti yang Diajukan: {leaveDays} hari
            </div>

            <div style={{ marginBottom: 15, fontWeight: 'bold' }}>
            Total Hak Cuti: {totalLeave} hari
            </div>

            <div style={{ marginBottom: 25, fontWeight: 'bold' }}>
            Total Sisa Hak Cuti Setelah Diambil: {updatedRemainingLeave >= 0 ? updatedRemainingLeave : 'Tidak valid'}
            </div>

            <button type="submit" style={{ padding: '10px 20px', fontWeight: 'bold' }}>
            Ajukan Cuti
            </button>
        </form>
    </div>
      
    </div>
  );
};

export default FormRequest;
