/**
 * Nested Navigation JavaScript
 * Handles collapsible menu functionality with accessibility support
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeNestedNav();
});

function initializeNestedNav() {
    const nav = document.querySelector('.nested-nav');
    if (!nav) return;

    const navToggle = nav.querySelector('.nav-toggle');
    const navContent = nav.querySelector('.nav-content');
    const menuToggles = nav.querySelectorAll('.menu-toggle');

    // Mobile navigation toggle
    if (navToggle && navContent) {
        navToggle.addEventListener('click', function() {
            const isOpen = navContent.classList.contains('open');
            
            if (isOpen) {
                navContent.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.querySelector('i').className = 'fas fa-bars';
            } else {
                navContent.classList.add('open');
                navToggle.setAttribute('aria-expanded', 'true');
                navToggle.querySelector('i').className = 'fas fa-times';
            }
        });
    }

    // Submenu toggles
    menuToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const menuItem = toggle.closest('.menu-item');
            const submenu = menuItem.querySelector('.menu-list');
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            if (submenu) {
                if (isExpanded) {
                    collapseSubmenu(toggle, submenu);
                } else {
                    expandSubmenu(toggle, submenu);
                }
            }
        });

        // Keyboard navigation
        toggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        if (navContent && navToggle && !nav.contains(e.target)) {
            if (navContent.classList.contains('open')) {
                navContent.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.querySelector('i').className = 'fas fa-bars';
            }
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && navContent) {
                navContent.classList.remove('open');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.querySelector('i').className = 'fas fa-bars';
                }
            }
        }, 250);
    });

    // Initialize ARIA attributes
    initializeAriaAttributes();
    
    // Set active menu items
    setActiveMenuItems();
}

function expandSubmenu(toggle, submenu) {
    toggle.setAttribute('aria-expanded', 'true');
    submenu.style.display = 'block';
    submenu.classList.add('expanding');
    submenu.classList.remove('collapsing');
    
    // Update folder icon
    const folderIcon = toggle.querySelector('.fa-folder');
    if (folderIcon) {
        folderIcon.className = 'fas fa-folder-open menu-icon';
    }
    
    // Remove animation class after animation completes
    setTimeout(function() {
        submenu.classList.remove('expanding');
    }, 300);
}

function collapseSubmenu(toggle, submenu) {
    toggle.setAttribute('aria-expanded', 'false');
    submenu.classList.add('collapsing');
    submenu.classList.remove('expanding');
    
    // Update folder icon
    const folderIcon = toggle.querySelector('.fa-folder-open');
    if (folderIcon) {
        folderIcon.className = 'fas fa-folder menu-icon';
    }
    
    // Hide submenu after animation completes
    setTimeout(function() {
        submenu.style.display = 'none';
        submenu.classList.remove('collapsing');
    }, 300);
}

function initializeAriaAttributes() {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    
    menuToggles.forEach(function(toggle) {
        const menuItem = toggle.closest('.menu-item');
        const submenu = menuItem.querySelector('.menu-list');
        
        if (submenu) {
            // Generate unique IDs
            const submenuId = 'submenu-' + Math.random().toString(36).substr(2, 9);
            submenu.setAttribute('id', submenuId);
            toggle.setAttribute('aria-controls', submenuId);
            
            // Set initial state
            if (toggle.getAttribute('aria-expanded') === null) {
                toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

function setActiveMenuItems() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(function(link) {
        const linkPath = new URL(link.href).pathname;
        
        if (linkPath === currentPath) {
            link.classList.add('active');
            
            // Expand parent menus
            let parentMenuItem = link.closest('.menu-item');
            while (parentMenuItem) {
                const parentSubmenu = parentMenuItem.closest('.menu-list');
                if (parentSubmenu && parentSubmenu.style.display === 'none') {
                    const parentToggle = parentSubmenu.previousElementSibling?.querySelector('.menu-toggle');
                    if (parentToggle) {
                        expandSubmenu(parentToggle, parentSubmenu);
                    }
                }
                parentMenuItem = parentSubmenu?.closest('.menu-item');
            }
        }
    });
}

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential external use
window.NestedNav = {
    expandSubmenu: expandSubmenu,
    collapseSubmenu: collapseSubmenu,
    initializeNestedNav: initializeNestedNav
};