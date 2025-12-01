int main () {
    int n, i, j, k, m, a [1000], b [1000], c [1000];
    scanf ("%d", &n);
    for (i = 0; i < n; i++) {
        scanf ("%d", &a[i]);
    }
    for (i = 0; i < n; i++) {
        scanf ("%d", &b[i]);
    }
    for (i = 0; i < n; i++) {
        c[i] = a[i] + b[i];
    }
    for (i = 0; i < n; i++) {
        printf ("%d", c[i]);
        if (i < n - 1) {
            printf (" ");
        }
    }
    return 0;
}