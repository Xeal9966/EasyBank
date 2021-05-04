const CC_TEMPLATE = (card) => `
<div class="cc" data-active='false' data-number="${card.number}";>
    <img src="images/icons/${card.vendor}.svg" alt="CC Logo">
    <span class="number"> <span class="asterisk">**** </span><span class="asterisk">**** </span>**** ${card.number}</span>
    <span class="date">${card.date}</span>
    <span class="type">${card.type}</span>
</div>`;

const TRANSACTION_TEMPLATE = (transaction) => `
<div class="activity-row" data-close = "true" data-number=${transaction.card}>
    <div class="transaction-header">
        <div class="transaction-agent">
            <img src="images/icons/money-${transaction.inOut}.svg" alt="Money">
            <div class="transaction-info">
                <h1>${transaction.agent}</h1>
                <h3>${transaction.type}</h3>
            </div>
        </div>
        <div class="value">
            <span class="${transaction.inOut}-value">${transaction.amount}</span>
            <span><strong>EUR</strong></span>
            <img id="expand" src="images/icons/expand_more.svg" alt="expand">
        </div>
    </div>
    <div class="transaction-details">
        <div class="details-row">
            <h2>Date</h2>
            <h3>${transaction.date}</h3>
        </div>
        <div class="details-row card">
            <h2>Card</h2>
            <h3>**** ${transaction.card}</h3>
        </div>
        <div class="details-row">
            <h2>Amount</h2>
            <h3 class="${transaction.inOut}-value">${transaction.amount} <strong>EUR</strong></h3>
        </div>
    </div>
</div>`;

const HISTORY_TEMPLATE = (history) => `
<div class="info-row">
    <span>${history.month}/${history.year}</span>
    <span>${history.balance}</span>
</div>
`;
const CARD_INFO_TEMPLATE = (card) => `
<div class="info-row" >
    <span>Status</span>
    <span>${card.status}</span>
</div>
<div class="info-row" >
    <span>Type</span>
    <span>${card.type}</span>
</div>
<div class="info-row" data-type="${card.type}">
    <span>Balance</span>
    <span>${card.balance} EUR</span>
</div>
<div class="info-row">
    <span>Daily limit</span>
    <span>${card.dailyL} EUR</span>
</div>
<div class="info-row">
    <span>Monthly limit</span>
    <span>${card.monthL} EUR</span>
</div>
<div class="info-row">
    <span>Activation date</span>
    <span>${card.activationDate}</span>
</div>
`;

const CARDS_FILTER_TEMPLATE = (filter) => `
<div class="filter-card" data-active="false" data-number="${filter.number}">
    <span>${filter.number}</span>
    <div class="v-line"></div>
    <img src="images/icons/${filter.vendor}.svg" alt="CC Logo">
</div>`;

const LOANS_TEMPLATE = (loan) => `
<div data-active="false" data-number="${loan.number}"class="cc loan">
    <span data-type="number">No. ${loan.number}</span>
    <span>${loan.amount} EUR </span>
</div>
`;

const LOANS_INFO_TEMPLATE = (loan) => `
<div class="info-row">
    <span>Start date</span>
    <span class="primary">${loan.startDate}</span>
</div>
<div class="info-row">
    <span>Amount</span>
    <span class="primary">${loan.amount} EUR</span>
</div>
<div class="info-row">
    <span>Tax</span>
    <span class="primary">${loan.tax}%</span>
</div>
<div class="info-row">
    <span>Returned</span>
    <span class="primary">${loan.returned} EUR</span>
</div>
<div class="info-row">
    <span>To be returned</span>
    <span class="primary">${loan.toReturn} EUR</span>
</div>
<div class="info-row">
    <span>Monthly payment</span>
    <span class="primary">${loan.fee} EUR</span>
</div>`;

const BRANCH_TEMPLATE = (safeBox) => `
<div class="branch-card">
    <div class="branch-card-row">
        <div>
            <h2>Branch</h2>
        </div>
        <div>
            <h1>${safeBox.branch}</h1>
            <div class="images-container">
                <img src="images/icons/directions.svg" alt="Direction Icon">
                <img src="images/icons/phone.svg" alt="Phone Icon">
            </div>
        </div>
    </div>
    <div class="branch-card-row">
        <div>
            <h2>Number-Sec. Level</h2>
        </div>
        <div>
            <h1>${safeBox.sector} - ${safeBox.level}</h1>
        </div>
    </div>
    <div class="branch-card-row">
        <div>
            <h2>Start date</h2>
            <h2>Monthly fee</h2>
        </div>
        <div>
            <h1>${safeBox.startDate}</h1>
            <h1>${safeBox.fee} EUR</h1>
        </div>
    </div>
</div>`;

const PROFILE_INFO_TEMPLATE = (profile) => `
<div class="personal-info-row">
    <h3>Account number</h3>
    <h1>${profile.aNumber}</h1>
</div>
<div class="personal-info-row">
    <h3>Account type</h3>
    <h1>${profile.aType}</h1>
</div>
<div class="personal-info-row">
    <h3>C.F.</h3>
    <h1>${profile.cf}</h1>
</div>
<div class="personal-info-row">
    <h3>E-Mail</h3>
    <h1>${profile.mail}</h1>
</div>
<div class="personal-info-row">
    <h3>Name</h3>
    <h1>${profile.name}</h1>
</div>
<div class="personal-info-row">
    <h3>Surname</h3>
    <h1>${profile.surname}</h1>
</div>
<div class="personal-info-row">
    <h3>Phone</h3>
    <h1>${profile.phone}</h1>
</div>
<div class="personal-info-row">
    <h3>Residence</h3>
    <h1>${profile.residence}</h1>
</div>
<div class="personal-info-row">
    <h3>Date of birth</h3>
    <h1>${profile.dob}</h1>
</div>
<div class="personal-info-row">
    <h3>Client since</h3>
    <h1>${profile.startDate}</h1>
</div>
<div class="personal-info-row">
    <h3>Monthly fee</h3>
    <h1>${profile.fee} EUR</h1>
</div>`;

const CURRENCY_BLOCK_TEMPLATE = (base, curr, value) => `
<div class="currency-card">
    <div class="info">
        <h2>${base}/${curr}</h2>
        <h3>${value}</h3>
    </div>
<img src="images/chart.svg" alt="chart">
</div>
`;

const STOCK_CARD_TEMPLATE = (stock_info) => `
<div class="stock-card" data-link=${stock_info.symbol} data-active=${stock_info.favorite}>
    <div class="stock-title">
        <h2>${stock_info.name} (${stock_info.symbol})</h2>
        <h3>${stock_info.price}</h3>
    </div>
    <div class="value" data-trend = ${stock_info.trend}>
        <span>${stock_info.change} (${stock_info.changePercent} %)</span>
        <img src="images/icons/trending_${stock_info.trend}.svg" alt="Trending icon">
    </div>
</div>
`;
const STOCK_INFO_TEMPLATE = (stock_info) => `
<div data-active = "true" data-stock='${stock_info.symbol}'>
    <div class="stock-title">
        <h1>${stock_info.name} (${stock_info.symbol})</h1>
        <div class="stock-title-value">
            <h3>${stock_info.price}</h3>
            <h3 data-trend = ${stock_info.trend}>${stock_info.change}</h3>
        </div>
    </div>
    <div class="chart-container">
        <div class="chart">
            <img src="images/big_chart.svg" alt="Chart">
        </div>
        <div class="stock-info">
            <div class="info">
                <h2>Max</h2>
                <h3>${stock_info.high}</h3>
            </div>
            <div class="info">
                <h2>Min</h2>
                <h3>${stock_info.low}</h3>
            </div>
            <div class="info">
                <h2>Min 52W</h2>
                <h3>${stock_info.week52Low}</h3>
            </div>
            <div class="info">
                <h2>Max 52W</h2>
                <h3>${stock_info.week52High}</h3>
            </div>
            <div class="info">
                <h2>P/E<h2>
                <h3>${stock_info.pe}</h3>
            </div>
            <div class="info">
                <h2>Volume</h2>
                <h3>${stock_info.volume}</h3>
            </div>
            <div class="info">
                <h2>Cap.</h2>
                <h3>${stock_info.cap}</h3>
            </div>
        </div>
    </div>
</div>`;