/**
 * New node file
 */


exports.dosomething= function (a,operation,b)
{
 var result=0;
	if (operation === "+")
		{
		 //  result = parseInt(a)+ parseInt(b);
		   result = Number(a)+ Number(b);
		   
		}
	
	console.log("result:" + result);
   return result;
};