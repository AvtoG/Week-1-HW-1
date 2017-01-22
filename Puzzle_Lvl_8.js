function Move (direction) {
var y=0;
while (y < 8) {
direction ();
y = y +1;
}
right();
right();
}
Move (down);
Move (up);
Move (down);
Move (up);
Move (down);
