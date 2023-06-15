document.getElementById('root').addEventListener('mouseleave', function(e) {
    console.log('mouseleave', e.target.id);
});

document.getElementById('root').addEventListener('mouseout', function(e) {
    console.log('mouseout', e.target.id);
});