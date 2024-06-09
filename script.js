function generateCheck() {
    const check = document.getElementById('check');
    const date = new Date();
    const randomNumber = Math.floor(Math.random() * 1000000);

    const checkContent = `
        <p><strong>Check Number:</strong> ${randomNumber}</p>
        <p><strong>Date:</strong> ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
    `;

    check.innerHTML = checkContent;
}

function saveCheck() {
    const check = document.getElementById('check');
    if (!check.innerHTML.trim()) {
        alert('Please generate a check first.');
        return;
    }

    const options = {
        margin:       1,
        filename:     'check.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(check).set(options).save();
}
