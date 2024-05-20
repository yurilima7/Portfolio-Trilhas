document.addEventListener('DOMContentLoaded', () => {

    const downloadButton = document.getElementById('download-cv');

    downloadButton.addEventListener('click', () => {
        const pdfFilePath = 'assets/docs/Currículo.pdf';
        const link = document.createElement('a');

        link.href = pdfFilePath;
        link.download = 'Curriculo.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
})