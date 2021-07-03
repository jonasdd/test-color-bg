let all = document.body.querySelectorAll("*:not(script)");
      const test = (element)=> (window.getComputedStyle(element));
      all.forEach(element => {
        if(test(element).color){
          console.log(test(element).color);
          if (!test(element).backgroundColor || test(element).backgroundColor === 'rgba(0, 0, 0, 0)' ) {
            console.log('bg not set', test(element).backgroundColor);
            element.style.border = '2px solid red';
          }
        }
        if(test(element).backgroundColor){
          if (!test(element).color || test(element).color === 'rgba(0, 0, 0, 0)' ) {
            console.log('color not set', test(element).color);
            element.style.boxShadow = '0 0 0 4px  green inset';
          }
        }
      });
