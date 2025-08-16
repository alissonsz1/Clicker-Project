import platform
import subprocess
import os

def main():
    system = platform.system()

    if system == "Windows":
        subprocess.call(["start_dev.bat"], shell=True)
    elif system in ["Linux", "Darwin"]:  # Darwin = macOS
        subprocess.call(["bash", "start_servers.sh"])
    else:
        print(f"Sistema operacional não suportado: {system}")

if __name__ == "__main__":
    main()