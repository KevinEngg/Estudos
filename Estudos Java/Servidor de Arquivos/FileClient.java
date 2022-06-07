import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.Socket;
public class FileClient{
 public static void main (String [] args ) throws IOException {
  int tamanhoarq=6022386;
  long start = System.currentTimeMillis();
  int byteslidos;
  int current = 0;
  try {
   Socket s = new Socket("127.0.0.1",13267);
  // recebendo o arquivo server
   byte [] bytearray = new byte [tamanhoarq];
   InputStream is = s.getInputStream();
   FileOutputStream fos = new FileOutputStream("D:/cópia.txt"); // serve para armazenar o download
   BufferedOutputStream bos = new BufferedOutputStream(fos); // buffer para ler o arquivo do server
   byteslidos = is.read(bytearray,0,bytearray.length); //armazenar os buffers lidos do server
   current = byteslidos;
   // terminou de receber o arquivo do server
   do { //lendo todos os bytes recebidos
     byteslidos = is.read(bytearray, current, (bytearray.length-current));
     if(byteslidos >= 0) current += byteslidos;
   } while(byteslidos > -1);
   bos.write(bytearray, 0 , current); //enviando informação para o servidor que o processo acabou
   long end = System.currentTimeMillis(); // Vai armazenar o tempo de duração do processo
   System.out.println(end-start); // Passando a informação de tempo em s para o cliente
   bos.close(); //fechando o buffer de saída
   s.close(); //fechando o socket
   System.out.println("Download conluído!!");
   }catch (IOException ex)
  {
  System.out.println("Algo deu errado!!");
  }
 }
}