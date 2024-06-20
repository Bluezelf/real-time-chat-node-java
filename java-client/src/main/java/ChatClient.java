import javax.websocket.*;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URI;

@ClientEndpoint
public class ChatClient {

    private static Session userSession = null;

    @OnOpen
    public void onOpen(Session session) {
        System.out.println("Connected to server");
        userSession = session;
    }

    @OnMessage
    public void onMessage(String message) {
        System.out.println(message);
    }

    @OnClose
    public void onClose(Session session, CloseReason closeReason) {
        System.out.println("Session closed: " + closeReason);
        userSession = null;
    }

    public static void main(String[] args) {
        WebSocketContainer container = ContainerProvider.getWebSocketContainer();
        try {
            URI uri = URI.create("ws://localhost:8080");
            container.connectToServer(ChatClient.class, uri);

            // Leer entrada desde la consola
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            String input;
            while ((input = reader.readLine()) != null) {
                if (userSession != null && userSession.isOpen()) {
                    userSession.getAsyncRemote().sendText(input);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
