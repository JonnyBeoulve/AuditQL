import React from 'react';
import { RadialChart } from 'react-vis';

/* This will display a radial chart that shows popularity of genres. */
const GenreRadialChart = ({ data }) => {

    /* Determine number of audits per genre for D3 graph. */
    const totalComplianceAudits = data.audits.reduce(function (total, audit) {
        return audit.genre === 'Compliance' ? total + 1 : total
    }, 0);
    const totalFinancialAudits = data.audits.reduce(function (total, audit) {
        return audit.genre === 'Financial' ? total + 1 : total
    }, 0);
    const totalInvestigativeAudits = data.audits.reduce(function (total, audit) {
        return audit.genre === 'Investigative' ? total + 1 : total
    }, 0);
    const totalOperationalAudits = data.audits.reduce(function (total, audit) {
        return audit.genre === 'Operational' ? total + 1 : total
    }, 0);

    /* Define chart data. */
    const auditChartData = [
        { angle: totalComplianceAudits, radius: 1, label: 'Compliance' },
        { angle: totalFinancialAudits, radius: 1, label: 'Financial' },
        { angle: totalInvestigativeAudits, radius: 1, label: 'Investigative' },
        { angle: totalOperationalAudits, radius: 1, label: 'Operational' }
    ]

    return (
        <RadialChart
            showLabels={true}
            data={auditChartData}
            width={400}
            height={400}
        />
    )
}

export default GenreRadialChart;