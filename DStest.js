document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggleMenu');
    const sidebar = document.querySelector('.sidebar');
    // const maindiv= document.querySelector('.DSMainDiv');
    // const container9=document.querySelector('.DSshowing9Container');
    toggleMenu.addEventListener('click',function(){
        sidebar.classList.toggle('active');
        // maindiv.classList.add('DSMainDivSidebar');
        // container9.classList.add('DSshowing9ContainerSidebar');
    });
    
    document.addEventListener('click',function(event){
        if(!toggleMenu.contains(event.target)  && !sidebar.contains(event.target )){
            sidebar.classList.remove('active'); 
            // maindiv.classList.remove('DSMainDivSidebar');
            // container9.classList.remove('DSshowing9ContainerSidebar');

        }
    });
});


