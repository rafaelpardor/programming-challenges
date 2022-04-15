# Writing a Bootloader

```
nasm -f bin boot1.adm -o boot1.bin 
hexdump boot1.bin 
qemu-system-x86_64 -fda boot1.bin 
```

Source: <http://3zanders.co.uk/2017/10/13/writing-a-bootloader/>
