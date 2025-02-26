// Initializing Clipboard.js to handle the "copy" functionality
var clipboard = new ClipboardJS('.copy-btn');

// Success callback when the content is successfully copied
clipboard.on('success', function(e) {
    alert('Code copied to clipboard!');
    e.clearSelection();
});

// Error callback when the copy action fails
clipboard.on('error', function(e) {
    alert('Failed to copy code.');
});