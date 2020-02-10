export default function renderNavbar(navbar){
    return (
       `
        <nav>
            <ul>
                <li>
                    <a href="#about"  top:30px>
                        <i class="fas fa-user-circle"></i> About
                    </a>
                </li>
                <li>
                    <a href="#news">
                        <i class="fas fa-newspaper"></i> News
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <i class="fas fa-laptop-code"></i> Projects
                    </a>
                </li>
            </ul>
        </nav>`
    );
  }