import React from 'react';

const sectorData = [
    {
        name: 'Consumer Internet',
        description: 'Digital platforms with scale-driven monetization and ad/commerce exposure.',
        companies: [
            { name: 'Amazon', ticker: 'AMZN', revenueGrowth: 12.4, opMargin: 6.8 },
            { name: 'Meta', ticker: 'META', revenueGrowth: 18.2, opMargin: 34.5 },
            { name: 'Alphabet', ticker: 'GOOGL', revenueGrowth: 11.6, opMargin: 26.1 },
            { name: 'Uber', ticker: 'UBER', revenueGrowth: 19.7, opMargin: 8.4 }
        ]
    },
    {
        name: 'SaaS',
        description: 'Subscription software platforms with recurring revenue and high gross margins.',
        companies: [
            { name: 'Salesforce', ticker: 'CRM', revenueGrowth: 10.1, opMargin: 17.2 },
            { name: 'ServiceNow', ticker: 'NOW', revenueGrowth: 22.9, opMargin: 20.6 },
            { name: 'Adobe', ticker: 'ADBE', revenueGrowth: 12.7, opMargin: 29.8 },
            { name: 'Snowflake', ticker: 'SNOW', revenueGrowth: 33.5, opMargin: -9.4 }
        ]
    },
    {
        name: 'Semis',
        description: 'Semiconductor designers and manufacturers across compute, memory, and equipment.',
        companies: [
            { name: 'NVIDIA', ticker: 'NVDA', revenueGrowth: 59.6, opMargin: 49.3 },
            { name: 'AMD', ticker: 'AMD', revenueGrowth: 8.4, opMargin: 14.2 },
            { name: 'TSMC', ticker: 'TSM', revenueGrowth: 9.9, opMargin: 40.2 },
            { name: 'ASML', ticker: 'ASML', revenueGrowth: 16.8, opMargin: 32.7 }
        ]
    }
];

const formatPercent = (value) => `${value.toFixed(1)}%`;

const getSectorAverages = (companies) => {
    const totals = companies.reduce(
        (accumulator, company) => ({
            revenueGrowth: accumulator.revenueGrowth + company.revenueGrowth,
            opMargin: accumulator.opMargin + company.opMargin
        }),
        { revenueGrowth: 0, opMargin: 0 }
    );
    return {
        revenueGrowth: totals.revenueGrowth / companies.length,
        opMargin: totals.opMargin / companies.length
    };
};

const TechSectorDashboard = () => (
    <div className="tech-app">
        <header className="tech-hero">
            <div className="content-container">
                <p className="tech-hero__eyebrow">Tech Sector Scorecard</p>
                <h1 className="tech-hero__title">LTM Revenue Growth &amp; Operating Margins</h1>
                <p className="tech-hero__subtitle">
                    Coverage is grouped into consumer internet, SaaS, and semiconductors using analyst coverage
                    conventions. Metrics are LTM (last twelve months) and intended for directional context.
                </p>
            </div>
        </header>

        <main className="content-container tech-content">
            <section className="tech-summary">
                {sectorData.map((sector) => {
                    const averages = getSectorAverages(sector.companies);
                    return (
                        <div className="tech-summary__card" key={sector.name}>
                            <h2>{sector.name}</h2>
                            <p className="tech-summary__description">{sector.description}</p>
                            <div className="tech-summary__metrics">
                                <div>
                                    <span className="tech-summary__label">Avg. LTM Revenue Growth</span>
                                    <span className="tech-summary__value">{formatPercent(averages.revenueGrowth)}</span>
                                </div>
                                <div>
                                    <span className="tech-summary__label">Avg. LTM Op Margin</span>
                                    <span className="tech-summary__value">{formatPercent(averages.opMargin)}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            <section className="tech-table">
                {sectorData.map((sector) => (
                    <div className="tech-table__section" key={sector.name}>
                        <div className="tech-table__header">
                            <div>
                                <h2>{sector.name}</h2>
                                <p>{sector.description}</p>
                            </div>
                            <span className="tech-table__pill">LTM Metrics</span>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Ticker</th>
                                    <th>LTM Revenue Growth</th>
                                    <th>LTM Op Margin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sector.companies.map((company) => (
                                    <tr key={company.ticker}>
                                        <td>{company.name}</td>
                                        <td>{company.ticker}</td>
                                        <td>{formatPercent(company.revenueGrowth)}</td>
                                        <td>{formatPercent(company.opMargin)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </section>
        </main>
    </div>
);

export default TechSectorDashboard;
