// Custom JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // --- CONFIGURATION ---
            // This is where you can easily update your information.
            const profileData = {
                name: "Nguyễn Mạnh Hùng",
                id: "@nmhruby",
                description: "Full-Stack Developer & Content Creator. Transforming ideas into digital experiences. Check out my work below!",
                avatarUrl: "https://cdn.glitch.global/1704123d-7ee7-4326-a68b-f85c81e1d26a/avatar.png?v=1750917312375",
                creator: {
                    name: "Nguyễn Mạnh Hùng",
                    url: "https://www.facebook.com/NMHRUBY" // Your portfolio or another link
                },
                linkSections: [
                    { // Start New Group
                        title: "Coding",
                        links: [
                            { //Start New Link
                                title: "My CV",
                                description: "See my latest projects and case studies.",
                                icon: "fas fa-briefcase",
                                url: "https://cv-nmhruby.glitch.me/"
                            }, // End New Link
                            { //Start New Link
                                title: "GitHub",
                                description: "Follow my coding journey and contribute.",
                                icon: "fab fa-github",
                                url: "https://github.com/hungthichcode"
                            }, // End New Link
                        ]
                    }, // End New Group
                    {
                        title: "Content & Support",
                        links: [
                            { //Start New Link
                                title: "YouTube Channel",
                                description: "Tutorials, vlogs, and tech reviews.",
                                icon: "fab fa-youtube",
                                url: "https://www.youtube.com/@nmhruby"
                            }, // End New Link
                        ]
                    }, // End New Group
                  { // Start New Group
                        title: "My Project & Tools",
                        links: [
                            { //Start New Link
                                title: "CSS Minifier",
                                description: "Beautify CSS to code faster",
                                icon: "fa-solid fa-code",
                                url: "https://cssminifier.glitch.me"
                            }, // End New Link
                            { //Start New Link
                                title: "Office Tools",
                                description: "Help office work quickly",
                                icon: "fa-solid fa-chair-office",
                                url: "https://nmhruby-officetool.glitch.me"
                            }, // End New Link
                            { //Start New Link
                                title: "Remove Background",
                                description: "Used API Key of remove.bg",
                                icon: "fa-regular fa-eraser",
                                url: "https://remove-background-nmhruby.glitch.me"
                            }, // End New Link
                            { //Start New Link
                                title: "Photoshop Brushes Generator",
                                description: "Create brushes faster, no manual work, automatic, fast",
                                icon: "fa-solid fa-paintbrush-fine",
                                url: "https://nmhruby-photoshop-brush-creator.glitch.me"
                            }, // End New Link
                        ]
                    }, // End New Group
                ]
            };

            // --- DYNAMIC CONTENT INJECTION ---
            // This part of the script takes the data from above and builds the page.

            function updateProfileInfo() {
                document.getElementById('avatar').src = profileData.avatarUrl;
                document.getElementById('profileName').innerHTML = `${profileData.name} <i class="fas fa-check-circle verification-tick"></i>`;
                document.getElementById('profileId').textContent = profileData.id;
                document.getElementById('profileDescription').textContent = profileData.description;
            }

            function populateLinks() {
                const linksContainer = document.getElementById('linksContainer');
                if (!linksContainer) {
                    console.error("Links container not found!");
                    return;
                }
                
                linksContainer.innerHTML = ''; 

                profileData.linkSections.forEach(section => {
                    // Create a container for the section
                    const sectionDiv = document.createElement('div');
                    sectionDiv.className = 'links-section';
                    
                    // Add the section title if it exists
                    if (section.title) {
                        const titleElement = document.createElement('h2');
                        titleElement.className = 'section-title';
                        titleElement.textContent = section.title;
                        sectionDiv.appendChild(titleElement);
                    }

                    // Add the links for that section
                    section.links.forEach(link => {
                        const linkButton = document.createElement('a');
                        linkButton.href = link.url;
                        linkButton.className = 'link-btn';
                        linkButton.target = '_blank';
                        linkButton.rel = 'noopener noreferrer';
                        linkButton.setAttribute('role', 'button');
                        linkButton.setAttribute('aria-label', `${link.title}: ${link.description}`);

                        linkButton.innerHTML = `
                            <div class="link-content">
                                <i class="${link.icon} link-icon"></i>
                                <div class="link-text-wrapper">
                                    <div class="link-title">${link.title}</div>
                                    <p class="link-description">${link.description}</p>
                                </div>
                                <i class="fas fa-arrow-right link-action-icon"></i>
                            </div>
                        `;
                        sectionDiv.appendChild(linkButton);
                    });

                    linksContainer.appendChild(sectionDiv);
                });
            }

            function updateFooter() {
                const creatorLink = document.getElementById('creatorLink');
                creatorLink.textContent = profileData.creator.name;
                creatorLink.href = profileData.creator.url;

                const footerText = document.querySelector('.page-footer p');
                const currentYear = new Date().getFullYear();
                footerText.innerHTML = `&copy; ${currentYear} ${profileData.name}. All Rights Reserved. | Crafted with <i class="fas fa-heart"></i> by <a href="${profileData.creator.url}" id="creatorLink">${profileData.creator.name}</a>.`;
            }

            // --- INITIALIZATION ---
            try {
                updateProfileInfo();
                populateLinks();
                updateFooter();
                console.log("Link page with sections initialized successfully.");
            } catch (error) {
                console.error("Failed to initialize the page:", error);
                const mainContainer = document.querySelector('.main-container');
                if(mainContainer) {
                    mainContainer.innerHTML = `<div class="alert alert-danger text-center">Sorry, there was an error loading the page content.</div>`
                }
            }
        });