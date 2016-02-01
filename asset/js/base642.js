App = Em.Application.create();
App.AmuBase64EncoderComponent = Em.Component.extend({
    didInsertElement: function() {
        var self = this;
        
        this.$().on('dragenter', function(e){
            e.stopPropagation();
            e.preventDefault();
        });
        this.$().on('dragover', function(e){
            e.stopPropagation();
            e.preventDefault();
        });
        this.$().on('drop', function(e){
            e.stopPropagation();
            e.preventDefault();
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                self.ParseFile(e.dataTransfer.files[i]);
            }
        });
        
        //when using node-webkit command/ctrl c doesn't work...
        Mousetrap.bind(['command+c', 'ctrl+c'], function() {
            
            if (this.$('textarea').val()) {
                var val = this.$('textarea').val();
                var gui = node_require('nw.gui');
                var clipboard = gui.Clipboard.get();
                clipboard.set(val, 'text');
                
            } else {
                console.log('textarea is empty');
            }
            
            // return false to prevent default browser behavior
            // and stop event from bubbling
            return false;
        });
    },
    
    ParseFile: function(file){
        var self = this;
        var reader = new FileReader();
        reader.onloadend = function(e){
            self.$('.output textarea').val(e.target.result);
            self.$('.output textarea').select();
        }
        reader.readAsDataURL(file);
    }
});