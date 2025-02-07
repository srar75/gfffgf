import React, { useEffect, useState } from 'react';
import { Employee } from '../../models/Employee';
import { fetchEmployees } from '../../services/EmployeeService';

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (err) {
                setError('Error al cargar los empleados');
            } finally {
                setLoading(false);
            }
        };

        loadEmployees();
    }, []);

    if (loading) {
        return <div>Cargando empleados...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Listado de Empleados</h2>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;