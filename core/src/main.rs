use std::io::{self, BufRead, Write};

fn main() {
    let stdin = io::stdin();
    let mut reader = stdin.lock();
    let stdout = io::stdout();
    let mut writer = stdout.lock();
    let mut buffer = String::new();
    loop {
        buffer.clear();
        let read_result = reader.read_line(&mut buffer);
        match read_result {
            Ok(0) => break,
            Ok(_) => writer.write_all(buffer.to_uppercase().as_bytes()),
            Err(_) => break,
        };
    }
}
