import Ember from 'ember';

export default Ember.Component.extend ({
    didInsertElement : function(){
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
      },

    afterRenderEvent:  function(){
    this.$(document).ready(function() {

        $('.fadeinleft').each( function(i){

             


            var bottom_of_window = $(window).scrollTop() + $(window).height();

             

            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1','margin-left':'0px'},1000);

            }

             

        });


});


}

})