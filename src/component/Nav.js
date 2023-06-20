export function Nav () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light mx-4 fs-3" href="#">NR</a>
            <ul class="d-flex navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item me-4">
                    <a class="nav-link active text-light" aria-current="page" href="#">projects</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link active text-light" aria-current="page" href="#">skills</a>
                </li>
                <li class="nav-item me-4">
                    <a class="nav-link active text-light" aria-current="page" href="#">contact</a>
                </li>
            </ul>
        </div>
        
        {/* <figure class="text-end me-4">
            <blockquote class="blockquote text-light">
                <p>Be a yardstick of quality.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <cite title="Source Title">Steve Jobs</cite>
            </figcaption>
        </figure> */}
</nav>
    )
}