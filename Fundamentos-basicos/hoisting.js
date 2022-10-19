  //Es la forma en que JS organiza las declaraciones

        //  Como se escriben
        sumar();
        var x = 2;
        function sumar(){
            var suma = x + y;
            return suma;
        }
        var y = 1;

        // Como JS lo organiza
        function sumar(){
            var suma = x + y;
            return suma;
        }  
         var x = 2;
         var y = undefined;
        sumar();
         var y = 1;
        // Primero se cargan las funciones, segundo la declaración de variables y el resto en el orden normal del código.