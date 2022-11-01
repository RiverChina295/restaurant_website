 <!-- Add the script to the HEAD of your document -->
<SCRIPT LANGUAGE="JavaScript">
 // This snippet closes collapsible navbar after clicked outside
$(document).ready(function () 
{
  $(document).click(function (event) 
  {   
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) 
    {
    $(".navbar-toggler").click();
    }
  });
});
//  End 
</script>