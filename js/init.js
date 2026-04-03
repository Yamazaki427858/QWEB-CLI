
```javascript
// Initialize Monaco Editor
const editor = monaco.editor.create(document.getElementById('editor'), {
    value: '// QWEB-CLI IDE\n// Type your code here...',
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
    fontSize: 16,
    fontFamily: 'JetBrains Mono, monospace'
});

// Initialize Xterm Terminal
const term = new window.Xterm({
    screenReaderMode: true,
    theme: {
        background: '#000',
        foreground: '#00FF41'
    }
});
term.open(document.getElementById('terminal'));
window.fitTerminal = () => {
    term.fit();
};
window.addEventListener('resize', fitTerminal);
fitTerminal();

// ASCII Art Logo
const asciiArt = `
  _______  __   __  _______  _______ 
 |       ||  | |  ||       ||       |
 |    ___||  |_|  ||    ___||    ___|
 |   |___ |       ||   |___ |   |___ 
 |    ___||       ||    ___||    ___|
 |   |___ |   _   ||   |___ |   |___ 
 |_______||__| |__||_______||_______|
`;
term.writeln('\x1b[38;2;0;255;65m' + asciiArt);

// Simulate system loading progress bar
function progressBar() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            term.writeln('\x1b[38;2;0;255;65m');
            return;
        }
        const bar = '[' + '='.repeat(progress) + ' '.repeat(100 - progress) + ']';
        term.write(`\rLoading... ${bar} ${progress}%`);
        progress += 1;
    }, 50);
}

progressBar();
```
