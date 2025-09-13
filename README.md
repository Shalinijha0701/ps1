<<<<<<< HEAD
<<<<<<< HEAD
# Osto.one Cybersecurity Website

A modern, responsive website built for Osto.one - a cybersecurity startup focused on providing enterprise-grade security solutions for startups.

## 🚀 Features

- **Modern Design**: Clean, professional design with cybersecurity industry aesthetics
- **Responsive**: Mobile-first responsive design that works on all devices
- **Fast Loading**: Optimized for performance with lazy loading and code splitting
- **SEO Optimized**: Built-in SEO optimization with meta tags and structured data
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Interactive**: Smooth animations and micro-interactions using Framer Motion

## 🛠 Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router for multi-page navigation
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds
- **Deployment**: Configured for Render deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd osto-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/           # Navigation, Footer
│   ├── UI/              # Reusable UI components
│   ├── Animations/      # Animation components
│   └── SEO/             # SEO related components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
└── assets/              # Images, icons, fonts
```

## 🎨 Design System

The website uses a comprehensive design system with:

- **Colors**: Primary blue/navy, secondary cyan/teal, accent electric blue
- **Typography**: Inter for body text, Poppins for headings, JetBrains Mono for code
- **Components**: Consistent button styles, cards, forms, and layouts
- **Animations**: Smooth transitions, hover effects, and scroll animations

## 📱 Pages

1. **Landing Page** (`/`) - Hero, value propositions, social proof, features preview
2. **Endpoint Security** (`/endpoint-security`) - Advanced endpoint protection features
3. **Network Security** (`/network-security`) - Zero-trust network security
4. **Cloud Security** (`/cloud-security`) - Three-layer cloud protection
5. **Compliance & VAPT** (`/compliance-vapt`) - Compliance management and penetration testing
6. **About Us** (`/about`) - Company information, team, and contact details
7. **Demo & Trial** (`/demo`) - Lead generation forms and demo scheduling

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
VITE_CALENDAR_API_KEY=your_calendar_api_key
```

### Deployment

The project is configured for deployment on Render with:
- Automatic builds from Git
- Environment variable management
- CDN integration for static assets
- SSL certificate provisioning

## 🎯 Performance Targets

- **Loading Time**: < 3 seconds
- **Lighthouse Score**: > 90 for all metrics
- **Core Web Vitals**: All metrics in 'Good' range
- **Accessibility**: WCAG 2.1 AA compliant

## 🧪 Testing

The website has been tested across:
- **Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Devices**: Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- **Performance**: Lighthouse audits and WebPageTest analysis
=======
# ps1


>>>>>>> c48bf90e25868b35e1312cc28c83010c91f70975

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://hackathon.osto.one/shalinijha78/ps1.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://hackathon.osto.one/shalinijha78/ps1/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
<<<<<<< HEAD
>>>>>>> 29d84a85adf664303e1cf8321243b8dcde3a7bb4
=======
>>>>>>> c48bf90e25868b35e1312cc28c83010c91f70975
