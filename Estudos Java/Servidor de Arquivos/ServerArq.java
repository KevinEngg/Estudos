import java.io.BufferedInputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
public class ServerArq {

public static void main(String[] args) throws IOException {
// cria o nosso socket
 ServerSocket servidor = new ServerSocket(13267);
 try{
 while (true) {
  System.out.println("Aguardando...");
  Socket s = servidor.accept();
  System.out.println("Conexão aceita: " + s);
  // envia o arquivo (transforma em byte array)
  File arquivo = new File("D:/teste.txt");
  byte[] mybytearray = new byte[(int) arquivo.length()];
  FileInputStream fis = new FileInputStream(arquivo);
  BufferedInputStream bis = new BufferedInputStream(fis);
  bis.read(mybytearray, 0, mybytearray.length);
  OutputStream saida = s.getOutputStream();
  System.out.println("Enviando...");
  saida.write(mybytearray, 0, mybytearray.length);
  System.out.println("Processo concluído!!");
  saida.flush(); // para ter certeza que todos os dados do buffer estão gravados
  s.close();
}
}catch(IOException ex)
 {
 System.out.println("Algo deu errado!!");
 }
}
}