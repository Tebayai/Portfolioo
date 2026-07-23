// Project Tabs System
document.addEventListener('DOMContentLoaded', function() {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const projectTabs = document.querySelectorAll('.projet-tab');
    
    // Initialize - show maquette tab by default
    showTab('maquette');
    
    // Add click listeners to buttons
    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });
    
    function showTab(tabName) {
        // Hide all tabs
        projectTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab
        const selectedTab = document.querySelector(`[data-tab-content="${tabName}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        
        // Update active button style
        choiceButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-tab') === tabName) {
                button.classList.add('active');
            }
        });
    }
});
