// cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});



  // Check if the user is on a mobile device
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Remove the 'download' attribute from the link
    document.querySelector('a').removeAttribute('download');
}

// Skill Bar

(function() {
  
    var SkillsBar = function( bars ) {
      this.bars = document.querySelectorAll( bars );
      if( this.bars.length > 0 ) {
        this.init();
      } 
    };
    
    SkillsBar.prototype = {
      init: function() {
        var self = this;
        self.index = -1;
        self.timer = setTimeout(function() {
          self.action();
        }, 500);
        
        
      },
      select: function( n ) {
        var self = this,
          bar = self.bars[n];
          
          if( bar ) {
            var width = bar.parentNode.dataset.percent;
          
            bar.style.width = width;
            bar.parentNode.classList.add( "complete" ); 
          }
      },
      action: function() {
        var self = this;
        self.index++;
        if( self.index == self.bars.length ) {
          clearTimeout( self.timer );
        } else {
          self.select( self.index );  
        }
        
        setTimeout(function() {
          self.action();
        },500);
      }
    };
    
    window.SkillsBar = SkillsBar;
    
  })();
  
  (function() {
    document.addEventListener( "DOMContentLoaded", function() {
      var skills = new SkillsBar( ".skillbar-bar" );
    });
  })();