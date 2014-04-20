package fm.spin.spinner;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.Menu;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;


public class ConnectActivity extends ActionBarActivity {

    public static final String APPLICATION_ID = "1072BDA1";
    public static final String USER = "user";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connect);

        ImageButton cast_button = (ImageButton) findViewById(R.id.cast_button);
        cast_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openRoomActivity();
            }
        });
    }

    private void openRoomActivity() {
        EditText handle = (EditText) findViewById(R.id.user_handle);
        String user_handle = handle.getText().toString();
        if (user_handle.equals("")) {
            Context context = getApplicationContext();
            CharSequence text = "Please insert a handle above.";
            int duration = Toast.LENGTH_LONG;
            Toast toast = Toast.makeText(context, text, duration);
            toast.show();
        } else {
            Intent intent = new Intent(this, RoomActivity.class);
            intent.putExtra(USER, handle.getText().toString());
            intent.putExtra("Placeholder", "yay chromecast...");
            startActivity(intent);
        }

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        super.onCreateOptionsMenu(menu);
        getMenuInflater().inflate(R.menu.connect, menu);
        return true;
    }

}
