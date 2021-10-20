import java.io.*;
import java.util.StringTokenizer;
import java.lang.Math;
public class Main {
    static void getResult(int testArray[], int n) 
    { 
  
        // Sum of first n natural numbers 
        int sumN = (n * (n + 1)) / 2; 
  
        // Sum of squares of first n natural numbers 
        int sumSqN = (n * (n + 1) * (2 * n + 1)) / 6; 
  
        // To store the sum and sum of squares 
        // of the array elements 
        int sum = 0, sumSq = 0, i; 
  
        for (i = 0; i < n; i++) { 
            sum += testArray[i]; 
            sumSq += Math.pow(testArray[i], 2); 
        } 
  
        int B = (((sumSq - sumSqN) / (sum - sumN)) + sumN - sum) / 2; 
        int A = sum - sumN + B; 
        System.out.println(A + " " + B); 
    }
    
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        try{
		    int noOFTestCase = Integer.parseInt(br.readLine());
		    for(int index = 0; index < noOFTestCase; index++){
		        int sizeOfArray = Integer.parseInt(br.readLine());
		        int[] testArray = new int[sizeOfArray];
		        StringTokenizer arrInput = new StringTokenizer(br.readLine());
		        for(int i = 0; i < testArray.length; i++){
    		        testArray[i] = Integer.parseInt(arrInput.nextToken());
    		    }
		        getResult(testArray, testArray.length);
		    }
		}catch(Exception ex){
		    System.out.println("Error while getting data");
		}    
    }
}