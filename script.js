(function(){
  var b=document.querySelector('.burger'),l=document.querySelector('.links');
  if(b&&l){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
  var stories=document.querySelectorAll('.story');
  function setOpen(s,o){s.classList.toggle('open',o);var h=s.querySelector('.story-head');if(h)h.setAttribute('aria-expanded',o)}
  stories.forEach(function(s){var h=s.querySelector('.story-head');h.addEventListener('click',function(){setOpen(s,!s.classList.contains('open'))})});
  function fromHash(){var id=location.hash.slice(1);if(!id)return;var s=document.getElementById(id);if(s&&s.classList.contains('story')){setOpen(s,true);s.scrollIntoView()}}
  fromHash();window.addEventListener('hashchange',fromHash);
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var d=new FormData(f);var subj='Role enquiry from '+d.get('first')+' '+d.get('last');
    var body=d.get('message')+'\n\nFrom: '+d.get('first')+' '+d.get('last')+' ('+d.get('email')+')';
    location.href='mailto:ndirangutess@gmail.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);});}
})();
