console.log('Starting simple tests...');

try {
  const express = require('express');
  if (express) {
    console.log('Express is installed and can be required ✓');
  }
  console.log('All basic checks passed! 🎉');
} catch (error) {
  console.log('Test failed:', error.message);
  process.exit(1);  // Make it fail if something wrong
}
