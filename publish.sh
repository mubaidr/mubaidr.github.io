# make sure is committed
git commit -a -m "publish" && git push

# create new subtree from latest commit for dist/
commit=$(git subtree split --prefix=dist/ -b gh-pages)

# force push this commit to remote
git push https://github.com/mubaidr/mubaidr.github.io.git $commit:master --force

# git subtree push --prefix=dist/ mubaidr.github.io master
