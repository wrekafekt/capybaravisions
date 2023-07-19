document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', function(event){
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        });
    }

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }
});
