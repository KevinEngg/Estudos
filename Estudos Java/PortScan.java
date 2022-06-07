import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Scanner;
import java.net.Socket;
public class PortScan {
 public static void main(String[] args) {
  Scanner teclado = new Scanner(System.in);
  int timeout = 0;
  String ip;
  System.out.println("Digite o ip: ");
  ip= teclado.nextLine();
  System.out.println("Digite o tempo de espera em s: ");
  timeout = teclado.nextInt();
  for (int porta = 1; porta <= 65535; porta++) {
   try {
    Socket s = new Socket();
    s.connect(new InetSocketAddress(ip, porta), timeout);
    System.out.println("porta " + porta + " esta aberta ");
    s.close();
   } catch (IOException ex) {}
  }
 }
}